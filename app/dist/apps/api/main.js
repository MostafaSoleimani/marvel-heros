(()=>{"use strict";var __webpack_modules__={454:(__unused_webpack_module,exports,__webpack_require__)=>{var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppController=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),app_service_1=__webpack_require__(968);let AppController=class AppController{constructor(appService){this.appService=appService}getData(){return this.appService.getData()}};tslib_1.__decorate([(0,common_1.Get)(),tslib_1.__metadata("design:type",Function),tslib_1.__metadata("design:paramtypes",[]),tslib_1.__metadata("design:returntype",void 0)],AppController.prototype,"getData",null),AppController=tslib_1.__decorate([(0,common_1.Controller)(),tslib_1.__metadata("design:paramtypes",["function"==typeof(_a=void 0!==app_service_1.AppService&&app_service_1.AppService)?_a:Object])],AppController),exports.AppController=AppController},292:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppModule=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),app_controller_1=__webpack_require__(454),app_service_1=__webpack_require__(968),auth_module_1=__webpack_require__(92),config_1=__webpack_require__(793),user_module_1=__webpack_require__(874);let AppModule=class AppModule{};AppModule=tslib_1.__decorate([(0,common_1.Module)({imports:[config_1.ConfigModule.forRoot({isGlobal:!0}),auth_module_1.AuthModule,user_module_1.UserModule],controllers:[app_controller_1.AppController],providers:[app_service_1.AppService]})],AppModule),exports.AppModule=AppModule},968:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppService=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481);let AppService=class AppService{getData(){return{message:"Welcome to api!"}}};AppService=tslib_1.__decorate([(0,common_1.Injectable)()],AppService),exports.AppService=AppService},78:(__unused_webpack_module,exports,__webpack_require__)=>{var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AuthController=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),auth_service_1=__webpack_require__(487),auth_dto_1=__webpack_require__(494),users_entity_1=__webpack_require__(652);let AuthController=class AuthController{constructor(authService){this.authService=authService}signup(dto){return this.authService.signup(dto)}signin(dto){return this.authService.signin(dto)}};tslib_1.__decorate([(0,common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),(0,common_1.Post)("signup"),tslib_1.__param(0,(0,common_1.Body)()),tslib_1.__metadata("design:type",Function),tslib_1.__metadata("design:paramtypes",["function"==typeof(_b=void 0!==users_entity_1.UsersEntity&&users_entity_1.UsersEntity)?_b:Object]),tslib_1.__metadata("design:returntype",void 0)],AuthController.prototype,"signup",null),tslib_1.__decorate([(0,common_1.Post)("signin"),tslib_1.__param(0,(0,common_1.Body)()),tslib_1.__metadata("design:type",Function),tslib_1.__metadata("design:paramtypes",["function"==typeof(_c=void 0!==auth_dto_1.SignInDto&&auth_dto_1.SignInDto)?_c:Object]),tslib_1.__metadata("design:returntype",void 0)],AuthController.prototype,"signin",null),AuthController=tslib_1.__decorate([(0,common_1.Controller)("auth"),tslib_1.__metadata("design:paramtypes",["function"==typeof(_a=void 0!==auth_service_1.AuthService&&auth_service_1.AuthService)?_a:Object])],AuthController),exports.AuthController=AuthController},92:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.AuthModule=void 0;const tslib_1=__webpack_require__(752),strategy_1=__webpack_require__(657),common_1=__webpack_require__(481),jwt_1=__webpack_require__(64),auth_controller_1=__webpack_require__(78),auth_service_1=__webpack_require__(487);let AuthModule=class AuthModule{};AuthModule=tslib_1.__decorate([(0,common_1.Module)({imports:[jwt_1.JwtModule.register({})],controllers:[auth_controller_1.AuthController],providers:[auth_service_1.AuthService,strategy_1.JwtStrategy]})],AuthModule),exports.AuthModule=AuthModule},487:(__unused_webpack_module,exports,__webpack_require__)=>{var _a,_b;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AuthService=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),config_1=__webpack_require__(793),jwt_1=__webpack_require__(64),argon=__webpack_require__(38),users_model_1=__webpack_require__(963);let AuthService=class AuthService{constructor(jwt,config){this.jwt=jwt,this.config=config}signup(dto){return tslib_1.__awaiter(this,void 0,void 0,(function*(){if(users_model_1.USERS_DB.find((x=>x.name===dto.name)))throw new common_1.ForbiddenException("Credentials Taken");const password=yield argon.hash(dto.password);try{return users_model_1.USERS_DB.push(Object.assign(Object.assign({},dto),{password}))}catch(error){throw new Error(error)}}))}signin(dto){return tslib_1.__awaiter(this,void 0,void 0,(function*(){const user=users_model_1.USERS_DB.find((x=>x.name===dto.userName));if(!user)throw new common_1.ForbiddenException("نام یا رمز عبور اشتباه است");if(!(user.password===dto.password))throw new common_1.ForbiddenException("نام یا رمز عبور اشتباه است");return this.signToken(user.name)}))}signToken(userName){return tslib_1.__awaiter(this,void 0,void 0,(function*(){const payload={userName};return{access_token:yield this.jwt.signAsync(payload,{expiresIn:"1d",secret:"asdfghjkl;123456"})}}))}};AuthService=tslib_1.__decorate([(0,common_1.Injectable)({}),tslib_1.__metadata("design:paramtypes",["function"==typeof(_a=void 0!==jwt_1.JwtService&&jwt_1.JwtService)?_a:Object,"function"==typeof(_b=void 0!==config_1.ConfigService&&config_1.ConfigService)?_b:Object])],AuthService),exports.AuthService=AuthService},273:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.GetUser=void 0;const common_1=__webpack_require__(481);exports.GetUser=(0,common_1.createParamDecorator)(((data,ctx)=>{const request=ctx.switchToHttp().getRequest();return data?request.user[data]:request.user}))},306:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});__webpack_require__(752).__exportStar(__webpack_require__(273),exports)},494:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignInDto=void 0;const tslib_1=__webpack_require__(752),class_validator_1=__webpack_require__(849);class SignInDto{}tslib_1.__decorate([(0,class_validator_1.IsString)(),(0,class_validator_1.IsNotEmpty)(),tslib_1.__metadata("design:type",String)],SignInDto.prototype,"userName",void 0),tslib_1.__decorate([(0,class_validator_1.IsString)(),(0,class_validator_1.IsNotEmpty)(),tslib_1.__metadata("design:type",String)],SignInDto.prototype,"password",void 0),exports.SignInDto=SignInDto},937:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});__webpack_require__(752).__exportStar(__webpack_require__(854),exports)},854:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.JwtGuard=void 0;const passport_1=__webpack_require__(340);class JwtGuard extends((0,passport_1.AuthGuard)("jwt")){constructor(){super()}}exports.JwtGuard=JwtGuard},652:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.UsersEntity=void 0;const tslib_1=__webpack_require__(752),swagger_1=__webpack_require__(519);class UsersEntity{}tslib_1.__decorate([(0,swagger_1.ApiProperty)(),tslib_1.__metadata("design:type",String)],UsersEntity.prototype,"name",void 0),tslib_1.__decorate([(0,swagger_1.ApiProperty)(),tslib_1.__metadata("design:type",String)],UsersEntity.prototype,"email",void 0),tslib_1.__decorate([(0,swagger_1.ApiProperty)(),tslib_1.__metadata("design:type",String)],UsersEntity.prototype,"password",void 0),tslib_1.__decorate([(0,swagger_1.ApiProperty)(),tslib_1.__metadata("design:type",Number)],UsersEntity.prototype,"age",void 0),exports.UsersEntity=UsersEntity},963:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.USERS_DB=void 0,exports.USERS_DB=[{name:"niloofar",email:"niloofar@baam.sadad.co.ir",password:"123456",age:30},{name:"orkide",email:"orkide@baam.sadad.co.ir",password:"654321",age:25},{name:"roz",email:"roz@baam.sadad.co.ir",password:"1qaz",age:30}]},657:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});__webpack_require__(752).__exportStar(__webpack_require__(630),exports)},630:(__unused_webpack_module,exports,__webpack_require__)=>{var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.JwtStrategy=void 0;const tslib_1=__webpack_require__(752),config_1=__webpack_require__(793),common_1=__webpack_require__(481),passport_1=__webpack_require__(340),passport_jwt_1=__webpack_require__(136),users_model_1=__webpack_require__(963);let JwtStrategy=class JwtStrategy extends((0,passport_1.PassportStrategy)(passport_jwt_1.Strategy,"jwt")){constructor(config){super({jwtFromRequest:passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),secretOrKey:"asdfghjkl;123456"})}validate(payload){return tslib_1.__awaiter(this,void 0,void 0,(function*(){const user=users_model_1.USERS_DB.find((x=>x.name===payload.userName));return delete user.password,user}))}};JwtStrategy=tslib_1.__decorate([(0,common_1.Injectable)(),tslib_1.__metadata("design:paramtypes",["function"==typeof(_a=void 0!==config_1.ConfigService&&config_1.ConfigService)?_a:Object])],JwtStrategy),exports.JwtStrategy=JwtStrategy},25:(__unused_webpack_module,exports,__webpack_require__)=>{var _a;Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserController=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),decorator_1=__webpack_require__(306),guard_1=__webpack_require__(937),user_service_1=__webpack_require__(242);let UserController=class UserController{constructor(userService){this.userService=userService}getUser(user){return console.log("user:   ",user),this.userService.getUser(user.name)}};tslib_1.__decorate([(0,common_1.Get)(),tslib_1.__param(0,(0,decorator_1.GetUser)()),tslib_1.__metadata("design:type",Function),tslib_1.__metadata("design:paramtypes",[Object]),tslib_1.__metadata("design:returntype",void 0)],UserController.prototype,"getUser",null),UserController=tslib_1.__decorate([(0,common_1.UseGuards)(guard_1.JwtGuard),(0,common_1.Controller)("user"),tslib_1.__metadata("design:paramtypes",["function"==typeof(_a=void 0!==user_service_1.UserService&&user_service_1.UserService)?_a:Object])],UserController),exports.UserController=UserController},874:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserModule=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),user_controller_1=__webpack_require__(25),user_service_1=__webpack_require__(242);let UserModule=class UserModule{};UserModule=tslib_1.__decorate([(0,common_1.Module)({controllers:[user_controller_1.UserController],providers:[user_service_1.UserService]})],UserModule),exports.UserModule=UserModule},242:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserService=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),users_model_1=__webpack_require__(963);let UserService=class UserService{getUser(name){const user=users_model_1.USERS_DB.find((x=>x.name===name));if(!user)throw new common_1.ForbiddenException("Name Does not exists");const cloneUser=JSON.parse(JSON.stringify(user));return delete cloneUser.password,cloneUser}};UserService=tslib_1.__decorate([(0,common_1.Injectable)()],UserService),exports.UserService=UserService},481:module=>{module.exports=require("@nestjs/common")},793:module=>{module.exports=require("@nestjs/config")},143:module=>{module.exports=require("@nestjs/core")},64:module=>{module.exports=require("@nestjs/jwt")},340:module=>{module.exports=require("@nestjs/passport")},519:module=>{module.exports=require("@nestjs/swagger")},38:module=>{module.exports=require("argon2")},849:module=>{module.exports=require("class-validator")},136:module=>{module.exports=require("passport-jwt")},752:module=>{module.exports=require("tslib")}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}var __webpack_exports__={};(()=>{var exports=__webpack_exports__;Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),core_1=__webpack_require__(143),app_module_1=__webpack_require__(292);!function(){tslib_1.__awaiter(this,void 0,void 0,(function*(){const app=yield core_1.NestFactory.create(app_module_1.AppModule);app.setGlobalPrefix("api"),app.useGlobalPipes(new common_1.ValidationPipe({whitelist:!0})),app.enableCors({allowedHeaders:["content-type","Authorization "],origin:"http://localhost:4200",credentials:!0});const port=process.env.PORT||3333;yield app.listen(port),common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/api`)}))}()})();var __webpack_export_target__=exports;for(var i in __webpack_exports__)__webpack_export_target__[i]=__webpack_exports__[i];__webpack_exports__.__esModule&&Object.defineProperty(__webpack_export_target__,"__esModule",{value:!0})})();
//# sourceMappingURL=main.js.map